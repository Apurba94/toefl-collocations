# Collocation Trainer

Learn which words go together, such as make a decision and heavy rain, with quick quizzes.

Part of the [GRE and TOEFL Study Suite](https://github.com/Apurba94/gre-toefl-study-suite): 100 free study apps for the TOEFL iBT and more. It works offline, as a Windows program or in the browser.

## Download and run

- **Windows:** download `Collocation Trainer.exe` from the [latest release](https://github.com/Apurba94/toefl-collocations/releases/latest) and open it. Nothing to install. It opens in its own window and saves your progress in your user folder.
- **Browser:** open it online in the suite's web edition at https://gre-toefl-study-suite.vercel.app/apps/toefl-collocations/ . Progress stays in that browser.
- **From source:** `python launcher.py` (Python 3.10 or later, no packages needed).

## What it does

Collocations are the word partnerships that sound natural to fluent speakers: make a decision, not do a decision; heavy rain, not strong rain. Getting them right makes writing and speaking sound natural and helps in Complete the Words. This app has 30 common academic and everyday collocations.

Sections: Quiz, List, Progress, About.

## How to use it

1. Practise in **Quiz**: choose the word that completes the phrase naturally.
2. Learn the phrases in **List**, and say each one aloud.
3. When you read, notice which words appear together.

## Good to know

- All questions, passages and definitions were written for this suite. None are official ETS questions. For official practice, use the materials on ets.org.
- It follows the GRE General Test as shortened in September 2023 and the TOEFL iBT as updated in January 2026. Formats change, so check ets.org before your test.
- Feedback on writing and speaking counts things a program can count honestly, such as length and linking words. It does not give an official score.
- Not endorsed by or affiliated with ETS. GRE and TOEFL are registered trademarks of ETS.

## For developers

The app is plain HTML and JavaScript in `web/`, run by a small Python launcher that serves it on 127.0.0.1 only and needs a secret token for saving. Tests: `node --test "tests/*.test.js"` (23 tests) and `python -m unittest discover -s tests`. Build the .exe with `python build_exe.py`.

Built with AI assistance (Claude Code). MIT licence. By JANIN A APURBA.
