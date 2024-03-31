import error_img from "/error.jpeg"
export default function ErrorPage() {
    return (
        <div>
            <img src={error_img} alt="This is error image" className="w-100"/>
        </div>
    )
}
