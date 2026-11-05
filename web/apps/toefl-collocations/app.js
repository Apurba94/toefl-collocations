/* Collocation Trainer: which words go together, such as make a decision and heavy rain. */
(function () {
  'use strict';
  const items = (bank, n, seed) => { const r = SK.rng(seed); return SK.sample(r, bank, n).map((x) => SK.shuffleItem(r, { id: 'co-' + x.id, type: 'single', topic: 'Collocations', stem: x.s, choices: [x.answer].concat(x.wrong), answer: 0, explanation: 'We say **' + x.note + '**.' })); };
  const App = {
    about: 'Collocations are the word partnerships that sound natural to fluent speakers: make a decision, not do a decision; heavy rain, not strong rain. Getting them right makes writing and speaking sound natural and helps in Complete the Words. This app has 30 common academic and everyday collocations.',
    how: ['Practise in **Quiz**: choose the word that completes the phrase naturally.', 'Learn the phrases in **List**, and say each one aloud.', 'When you read, notice which words appear together.'],
    tabs: [
      { id: 'quiz', label: 'Quiz', render(el, ctx) { SK.quizStarter(el, { title: 'Which word fits?', sizes: [10, 20, 30], make: (t, n, s) => items(ctx.data.collocations, n, s), seconds: (n) => n * 20 }); } },
      { id: 'list', label: 'List', render(el, ctx) { el.appendChild(SK.card('Collocations', SK.table(['Phrase', 'Example'], ctx.data.collocations.map((x) => [SK.h('strong', { text: x.note }), x.s.replace('_____', x.answer)])))); } },
    ],
    checks: { 'every collocation question is valid': (data, assert) => { for (const it of items(data.collocations, 30, 1)) assert.deepEqual(SK.validateItem(it), []); } },
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = App; else SK.start(App);
})();
