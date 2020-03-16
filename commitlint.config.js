module.exports = {
  rules: {
    'body-leading-blank': [1, 'always'],
    'body-tense': [1, 'always', ['present-imperative']],
    'footer-leading-blank': [1, 'always'],
    'footer-tense': [1, 'always', ['present-imperative']],
    'header-max-length': [2, 'always', 72],
    'scope-case': [2, 'always', 'lowerCase'],
    'subject-empty': [2, 'never'],
    'subject-full-stop': [2, 'never', '.'],
    'subject-tense': [1, 'always', ['present-imperative']],
    'type-case': [2, 'always', 'lowerCase'],
    'type-empty': [2, 'never'],
    'type-enum': [
      2,
      'always',
      [
        'feat', // 新功能
        'review', // review代码提交
        'fix', // fix bug
        'style', // 格式（不影响代码运行的变动）
        'refactor', // 重构（即不是新增功能，也不是修改bug的代码变动）
        'docs', // 文档
        'test', // 增加测试
        'chore', // 建过程或辅助工具的变动
        'revert',
      ],
    ],
  },
}