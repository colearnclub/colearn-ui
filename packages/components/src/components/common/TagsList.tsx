import Tag from './Tag';
import { Tag as TagEntity, Maybe } from '../types';

type Props = {
  size?: 'md' | 'lg' | 'sm';
  tags?: Maybe<TagEntity[]>;
  invisible?: boolean;
};

export default function TagsList({ tags, size, invisible = false }: Props) {
  return (
    <>
      {tags
        ?.filter((t) => (!invisible && t.visible !== false) || invisible)
        ?.map((tag) => (
          <Tag size={size} key={`${tag.category}-${tag.id}`} name={tag.name!} />
        ))}
    </>
  );
}
