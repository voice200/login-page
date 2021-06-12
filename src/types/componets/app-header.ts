export interface AppHeaderProps {
  title: string;
  subtitle: string;
  className: classesAppHeader;
  needBorder: true | false
}

export interface classesAppHeader {
  classTitle: string | {};
  classSubtitle: string | {};
  classContainer : string | {};
}
