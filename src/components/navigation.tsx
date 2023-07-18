import Link from "next/link";

interface NavigationalItem {
    text: string;
    href: string;
}

const NavigationalSection = (props: NavigationalItem) => {
    const href = props.href;
    const text = props.text;
    return (
        <li>
            <Link href={href}>{text}</Link>
        </li>
    );
}

const NavigationalBar = () => {
    return (
        <nav>
            <ul>
                <NavigationalSection href="/" text="Home" />
                <NavigationalSection href="/about" text="About"/>
                <NavigationalSection href="/contact" text="Contact"/>
                <NavigationalSection text="Animals" href="/animals" />
                <NavigationalSection text="Cows" href="/cows" />
                <NavigationalSection text="Pigs" href="/pigs" />
                <NavigationalSection text="Chickens" href="/chickens" />
                <NavigationalSection text="Sheep" href="/sheep" />
            </ul>
        </nav>
    );
}

export default NavigationalBar;