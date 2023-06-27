import { Dialog } from "@material-tailwind/react";

interface DismissableModalProps {
  open: boolean;
  setOpen: any;
  ref?: any;
  children?: any;
  className?: string;
}

export default function DismissableModal({
  open,
  setOpen,
  ref,
  children,
  className,
}: DismissableModalProps) {
  return (
    <Dialog
      ref={ref}
      open={open}
      handler={() => setOpen()}
      className={className}
    >
      {children}
    </Dialog>
  );
}
