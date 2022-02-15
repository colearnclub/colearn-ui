type A11Props = {
  role: 'combobox';
  'aria-controls': string;
  'aria-autocomplete'?: 'list';
  placeholder?: string;
  'aria-label'?: string;
  'aria-activedescendant'?: string;
  'aria-expanded'?: boolean;
};

export default function getAutocompleteA11yProps(
  value?: string,
  placeholder?: string,
  expanded?: boolean,
  index?: number,
): A11Props {
  return {
    role: 'combobox',
    'aria-controls': '',
    'aria-autocomplete': 'list',
    placeholder,
    'aria-label': placeholder,
    'aria-activedescendant': index ?? 0 > -1 ? `${index}` : undefined,
    'aria-expanded': expanded,
  };
}
