import { IReactChildren } from "../../interfaces";
import { Container } from "./styles";

interface ILink {
    href: string;
};

const Link = ({ children, href }: IReactChildren & ILink) => {
    return (
        <Container href={href}>
            {children}
        </Container>
    )
};

export { Link };