import { Link, useResolvedPath, useMatch } from 'react-router-dom';
import classNames from 'classnames';

export default function NavLink({ children, to, className, activeClassName, inactiveClassName, ...linkProps }) {
  const resolvedPath = useResolvedPath(to);
  const isMatch = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <Link
      to={to}
      className={classNames(className, {
        [activeClassName]: isMatch,
        [inactiveClassName]: !isMatch,
      })}
      {...linkProps}>
      {children}
    </Link>
  );
}
