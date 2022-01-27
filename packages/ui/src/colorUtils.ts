import { Maybe } from 'types/schema';

export const colors = [
  '#11C7B6',
  '#067ABF',
  '#FF6753',
  '#B059CC',
  // '#FADA00',
  '#FA9715',
  '#276749',
];

export const subjectColors = [
  '#00B99B',
  '#F59C49',
  '#FC5B6E',
  '#B1182C',
  '#8CC983',
  '#267960',
  '#DBCE2B',
  '#9585DD',
  '#9D3FA9',
  '#74ADD0',
  '#4575B4',
  '#053061',
];

export function randomColorFromList(
  str: Maybe<string> | undefined,
  list: string[],
) {
  let index = 0;

  if (!str?.length) {
    return list[0];
  }

  for (let i = 0; i < str.length; i++) {
    index = str.charCodeAt(i) + ((index << 5) - index);
    index = index & index;
  }
  index = ((index % list.length) + list.length) % list.length;
  return list[index];
}
