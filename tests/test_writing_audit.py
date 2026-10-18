"""Exercise editorial rules against rendered HTML, including their exclusions."""
import os
from pathlib import Path
import subprocess
import tempfile
import unittest

AUDIT = Path(__file__).resolve().parents[1] / 'scripts' / 'audit-writing.py'


class WritingAuditTest(unittest.TestCase):
    def audit(self, html):
        with tempfile.TemporaryDirectory() as directory:
            Path(directory, 'index.html').write_text(html)
            return subprocess.run(
                ['python3', str(AUDIT)],
                env={**os.environ, 'BUILD_DIR': directory},
                capture_output=True, text=True,
            )

    def test_rejects_separator_dashes_in_rendered_prose(self):
        for prose in ('A thought—an aside.', 'A thought &mdash; an aside.',
                      'A thought – an aside.', 'A thought–an aside.',
                      'A thought -- an aside.', 'A thought <em>—an aside</em>.'):
            with self.subTest(prose=prose):
                result = self.audit(f'<main><p>{prose}</p></main>')
                self.assertEqual(result.returncode, 1, result.stdout + result.stderr)
                self.assertIn('sentence separator' if '—' not in prose and '&mdash;' not in prose else 'em dash', result.stderr)

    def test_preserves_code_metadata_and_numeric_ranges(self):
        result = self.audit('''<head><title>Article — KC</title></head>
            <main><p>Use <code>--flag</code> with <code>—</code>.</p>
            <pre><code>output — unchanged – unchanged -- unchanged</code></pre>
            <p>A 2–6 person team. <a href="/a—b/">A useful link</a>.</p></main>''')
        self.assertEqual(result.returncode, 0, result.stdout + result.stderr)

    def test_checks_prose_after_code(self):
        result = self.audit('<main><p><code>--flag</code> is useful — sometimes.</p></main>')
        self.assertEqual(result.returncode, 1)

    def test_existing_phrase_rules_still_apply(self):
        result = self.audit("<main><p>Here's the thing: it works.</p></main>")
        self.assertEqual(result.returncode, 1)
        self.assertIn('run-up', result.stderr)


if __name__ == '__main__':
    unittest.main()
