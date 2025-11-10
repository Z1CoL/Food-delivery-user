export type ButtonColorType = "active" | "inactive";

export type ButtonType = {
  text: string;
  disable?: boolean;
  buttonVariant?: ButtonColorType;
  onClick?: () => any;
  buttonImage?: string;
};
