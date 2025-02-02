import React, { useEffect, FC } from 'react';
import './Flower.scss'

const Flower = () => {
    useEffect(() => {
        const timeout = setTimeout(() => {
          document.body.classList.remove("not-loaded");
        }, 1000);
    
        return () => clearTimeout(timeout);
      }, []);
    
      return (
        <>
          <div className="night"></div>
          <div className="flowers">
            {[1, 2, 3].map((flowerNum) => (
              <div key={flowerNum} className={`flower flower--${flowerNum}`}>
                <div className={`flower__leafs flower__leafs--${flowerNum}`}>
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className={`flower__leaf flower__leaf--${i + 1}`}></div>
                  ))}
                  <div className="flower__white-circle"></div>
                  {[...Array(8)].map((_, i) => (
                    <div key={i} className={`flower__light flower__light--${i + 1}`}></div>
                  ))}
                </div>
                <div className="flower__line">
                  {[...Array(flowerNum === 1 ? 6 : 4)].map((_, i) => (
                    <div key={i} className={`flower__line__leaf flower__line__leaf--${i + 1}`}></div>
                  ))}
                </div>
              </div>
            ))}
    
            <div className="grow-ans" style={{ '--d': '1.2s' } as React.CSSProperties}>
              <div className="flower__g-long">
                <div className="flower__g-long__top"></div>
                <div className="flower__g-long__bottom"></div>
              </div>
            </div>
    
            {[1, 2].map((grassNum) => (
              <div key={grassNum} className="growing-grass">
                <div className={`flower__grass flower__grass--${grassNum}`}>
                  <div className="flower__grass--top"></div>
                  <div className="flower__grass--bottom"></div>
                  {[...Array(8)].map((_, i) => (
                    <div key={i} className={`flower__grass__leaf flower__grass__leaf--${i + 1}`}></div>
                  ))}
                  <div className="flower__grass__overlay"></div>
                </div>
              </div>
            ))}
    
            <div className="grow-ans" style={{ '--d': '2.4s' } as React.CSSProperties}>
              <div className="flower__g-right flower__g-right--1">
                <div className="leaf"></div>
              </div>
            </div>
    
            <div className="grow-ans" style={{ '--d': '2.8s' } as React.CSSProperties}>
              <div className="flower__g-right flower__g-right--2">
                <div className="leaf"></div>
              </div>
            </div>
    
            <div className="grow-ans" style={{ '--d': '2.8s' } as React.CSSProperties}>
              <div className="flower__g-front">
                {[...Array(8)].map((_, i) => (
                  <div key={i} className={`flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--${i + 1}`}>
                    <div className="flower__g-front__leaf"></div>
                  </div>
                ))}
                <div className="flower__g-front__line"></div>
              </div>
            </div>
    
            <div className="grow-ans" style={{ '--d': '3.2s' } as React.CSSProperties}>
              <div className="flower__g-fr">
                <div className="leaf"></div>
                {[...Array(8)].map((_, i) => (
                  <div key={i} className={`flower__g-fr__leaf flower__g-fr__leaf--${i + 1}`}></div>
                ))}
              </div>
            </div>
    
            {[...Array(8)].map((_, i) => (
              <div key={i} className={`long-g long-g--${i}`}>
                <div className="grow-ans" style={{ '--d': '3s' } as React.CSSProperties}>
                  <div className={`leaf leaf--0`}></div>
                </div>
                <div className="grow-ans" style={{ '--d': `${i === 0 ? 2.2 : 3.2}s` } as React.CSSProperties}>
                  <div className={`leaf leaf--1`}></div>
                </div>
                <div className="grow-ans" style={{ '--d': `${i === 0 ? 3.4 : 3.5}s` } as React.CSSProperties}>
                  <div className={`leaf leaf--2`}></div>
                </div>
                <div className="grow-ans" style={{ '--d': '3.6s' } as React.CSSProperties}>
                  <div className={`leaf leaf--3`}></div>
                </div>
              </div>
            ))}
          </div>
        </>
      );
};

export default Flower;