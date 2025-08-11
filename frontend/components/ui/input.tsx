import { TextInput, TextInputProps } from "react-native";

interface ReusableInputProps extends TextInputProps {
    // className?: string;
    inputClassName?: string;
    // icon?: React.ReactNode;
}

const ReusableInput = ({ inputClassName = '', ...props }: ReusableInputProps ) => {
    return (
        <TextInput 
            className={`w-full text-neutral text-xl font-robotoRegular rounded-lg border-gray-300 border pl-3 py-4`} {...props}
        />
    );
};

export default ReusableInput;