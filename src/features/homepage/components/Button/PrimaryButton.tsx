import { Button } from "@mui/material";

type PrimaryButtonProps = {
    text: string;
};

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ text }) => {
    return (
        <Button
            variant="contained"
            sx={{ width: 150, fontSize: 12, fontWeight: 600 }}
        >
            {text}
        </Button>
    )
}

export default PrimaryButton