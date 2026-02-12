import { Education } from '../types';

export const education: Education[] = [
  {
    id: 'cuhk',
    school: '香港中文大学',
    degree: '硕士',
    major: '计算机科学与技术（人工智能）',
    duration: '09/2025 - 03/2027',
    courses: []
  },
  {
    id: 'bit',
    school: '北京理工大学',
    degree: '本科',
    major: '数据科学与大数据技术',
    duration: '09/2021 - 06/2025',
    gpa: '87/100',
    courses: [
      '操作系统 (99)',
      'Web开发基础 (94)',
      '大数据分析技术 (97)',
      '计算机组织与体系结构 (91)',
      '数理统计 (92)',
      '大数据系统开发 (89)',
      '数据仓库与数据挖掘 (89)'
    ]
  }
];
