import { Link } from 'react-router-dom';
import { Icon } from '../icons/SailIcons';

const Chevron = () => (
  <Icon name="chevronRight" fill="currentColor" className="size-[10px] text-icon-subdued" />
);

const Breadcrumb = ({ pages, currentPage, showCurrentPage = true }) => {
  return (
    <nav className="flex items-center gap-2 text-sm">
      {pages.map((page, index) => (
        <span key={index} className="flex items-center gap-2">
          {index > 0 && <Chevron />}
          {page.to ? (
            <Link to={page.to} className="font-medium text-brand">
              {page.label}
            </Link>
          ) : (
            <span className="font-medium text-brand">{page.label}</span>
          )}
        </span>
      ))}
      <Chevron />
      {showCurrentPage && currentPage && (
        <span className="text-subdued">{currentPage}</span>
      )}
    </nav>
  );
};

export default Breadcrumb;
