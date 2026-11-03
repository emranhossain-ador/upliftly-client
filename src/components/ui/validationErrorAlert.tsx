import { TriangleAlert } from "lucide-react"

const ValidationErrorAlert = ({ msg }: { msg: string }) => {
    return (
        <p className="text-red-500 text-sm px-1 mt-1 inline-flex items-center gap-1.5"><TriangleAlert size={12} />{msg}</p>
    )
}

export default ValidationErrorAlert