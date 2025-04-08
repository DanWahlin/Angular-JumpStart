import React, { useState, useEffect, MouseEvent } from 'react';
import styled from 'styled-components';

const PaginationNav = styled.nav``;

const PaginationList = styled.ul`
  display: flex;
  padding-left: 0;
  list-style: none;
  border-radius: 0.25rem;
`;

const PaginationItem = styled.li<{ active?: boolean; disabled?: boolean }>`
  position: relative;
  display: block;
  padding: 0.5rem 0.75rem;
  margin-left: -1px;
  line-height: 1.25;
  color: #007bff;
  background-color: #fff;
  border: 1px solid #dee2e6;
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  
  &:first-child {
    margin-left: 0;
    border-top-left-radius: 0.25rem;
    border-bottom-left-radius: 0.25rem;
  }
  
  &:last-child {
    border-top-right-radius: 0.25rem;
    border-bottom-right-radius: 0.25rem;
  }
  
  ${props => props.active && `
    z-index: 1;
    color: #fff;
    background-color: #027FF4;
    border-color: #027FF4;
  `}
  
  ${props => props.disabled && `
    color: #6c757d;
    pointer-events: none;
    background-color: #fff;
    border-color: #dee2e6;
  `}
`;

const PaginationLink = styled.a`
  cursor: pointer;
`;

interface PaginationProps {
  pageSize: number;
  totalItems: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ 
  pageSize, 
  totalItems, 
  onPageChange 
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pages, setPages] = useState<number[]>([]);
  const [isVisible, setIsVisible] = useState(false);
  const [previousEnabled, setPreviousEnabled] = useState(false);
  const [nextEnabled, setNextEnabled] = useState(true);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    if (pageSize && totalItems) {
      const calculatedTotalPages = Math.ceil(totalItems / pageSize);
      setTotalPages(calculatedTotalPages);
      setIsVisible(true);
      
      if (totalItems >= pageSize) {
        const newPages = [];
        for (let i = 1; i <= calculatedTotalPages; i++) {
          newPages.push(i);
        }
        setPages(newPages);
      }
    } else {
      setIsVisible(false);
    }
  }, [pageSize, totalItems]);

  const handlePreviousNext = (direction: number, event?: React.MouseEvent) => {
    if (event) {
      event.preventDefault();
    }
    
    let page = currentPage;
    if (direction === -1) {
      if (page > 1) { page--; }
    } else {
      if (page < totalPages) { page++; }
    }
    
    changePage(page, event);
  };

  const changePage = (page: number, event?: React.MouseEvent) => {
    if (event) {
      event.preventDefault();
    }
    
    if (currentPage === page) { return; }
    
    setCurrentPage(page);
    setPreviousEnabled(page > 1);
    setNextEnabled(page < totalPages);
    onPageChange(page);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <PaginationNav>
      <PaginationList className="pagination">
        <PaginationItem 
          disabled={!previousEnabled} 
          onClick={(e) => handlePreviousNext(-1, e)}
        >
          <PaginationLink aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </PaginationLink>
        </PaginationItem>
        
        {pages.map(page => (
          <PaginationItem 
            key={page} 
            active={currentPage === page} 
            onClick={(e) => changePage(page, e)}
          >
            <PaginationLink>{page}</PaginationLink>
          </PaginationItem>
        ))}
        
        <PaginationItem 
          disabled={!nextEnabled} 
          onClick={(e) => handlePreviousNext(1, e)}
        >
          <PaginationLink aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </PaginationLink>
        </PaginationItem>
      </PaginationList>
    </PaginationNav>
  );
};

export default Pagination;
