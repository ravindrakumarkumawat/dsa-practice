import React from 'react'
import './CardWrapper.css'

interface CardWrapperProps {
  children: React.ReactNode;
  componentName: string;
  componentDescription: string;
}

const CardWrapper = ({ children, componentName, componentDescription }: CardWrapperProps) => {
  return (
    <div className="CardWrapper-component">
      <h3 className="CardWrapper-component-name">{`<${componentName} />`}</h3>
      <p className="CardWrapper-component-description">{componentDescription}</p>
      {children}
    </div>
  )
}

export default CardWrapper
