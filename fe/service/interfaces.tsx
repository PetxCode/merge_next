export interface iProps {
  toggle: boolean;
  toggled: boolean;
  onToggle: () => void;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
  setToggled: React.Dispatch<React.SetStateAction<boolean>>;
}
