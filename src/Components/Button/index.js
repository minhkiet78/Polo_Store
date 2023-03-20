import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Button({ to, href, children, primary, outline, row, sizes, sizeM, sizeL, onClick, ...passProps }) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps,
    };

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    const classe = cx('wrapper', {
        primary: primary,
        outline: outline,
        sizes,
        sizeM,
        sizeL,
        row,
    });
    return (
        <div>
            <Comp className={classe} {...props}>
                <span>{children}</span>
            </Comp>
        </div>
    );
}

export default Button;