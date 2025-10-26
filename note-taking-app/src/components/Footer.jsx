export default function Footer() {

    const currentDate = new Date();

    return (
        <footer>
            <p> Copyright © {currentDate.getFullYear()} </p>
        </footer>
    )
}