import Tag from '../common/Tag';
import { Tag as TagEntity, Maybe } from '../types';

type Props = {
  size?: 'md' | 'lg' | 'sm';
  tags?: Maybe<TagEntity[]>;
  invisible?: boolean;
  onClick?: (tag: string, id?: string) => void;
  onDelete?: (tag: string) => void;
};

export default function TagsList({ tags, invisible = false, ...rest }: Props) {
  return (
    <>
      {tags
        ?.filter((t) => (!invisible && t.visible !== false) || invisible)
        ?.map((tag) => (
          <Tag
            key={`${tag.category}-${tag.id}`}
            name={tag.name!}
            id={tag?.id}
            {...rest}
          />
        ))}
    </>
  );
}
