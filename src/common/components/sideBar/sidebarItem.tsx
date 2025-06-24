import Link from 'next/link';
import * as S from './sidebar.css';
import Image from 'next/image';
interface SidebarItemProps {
  label: string;
  href: string;
  pathName?: string;
  img: string;
}

function SidebarItem({ label, href, pathName, img }: SidebarItemProps) {
  return (
    <Link href={href}>
      <li className={S.sidebarItem({ isSelected: pathName === href })}>
        <Image className={S.sidebarItemImage} src={img} alt={label} />
        <span>{label}</span>
      </li>
    </Link>
  );
}

export default SidebarItem;
