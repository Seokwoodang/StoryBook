export interface WidthHeight {
  width: number;
  height: number;
}

export interface CheckBoxImgProps extends WidthHeight {
  backgroundColor: string;
  itemColor: string;
}

export interface CheckBoxProps {
  onClick: () => void;
  checked: boolean;
}
