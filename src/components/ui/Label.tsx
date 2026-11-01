

const Label = ({ labelText, isRequired = false }: { labelText: string, isRequired?: boolean }) => {
    return (
        <label className="text-sm font-semibold block pl-1">
            {labelText} {isRequired && <span className="text-red-500">*</span>}
        </label>
    )
};

export default Label;