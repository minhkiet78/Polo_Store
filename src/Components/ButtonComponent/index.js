import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';
import { Fragment } from 'react';

const cx = classNames.bind(styles);

function ButtonComponent({ to, href, children, primary, outline, row, sizes, sizeM, sizeL, onClick, ...passProps }) {
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
        <Fragment>
            <Comp className={classe} {...props}>
                <span>{children}</span>
            </Comp>
        </Fragment>
    );
}

export default ButtonComponent;
