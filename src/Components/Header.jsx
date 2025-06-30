import React, { useState, useEffect } from 'react';
import './Header.css'; // We'll create this CSS file next

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [cartQuantity, setCartQuantity] = useState(0);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleSubmenu = (menuId) => {
    setActiveSubmenu(activeSubmenu === menuId ? null : menuId);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  // Navigation data
  const navItems = [
    {
      id: 'popular',
      title: 'Popular',
      link: '/collections/best-sellers',
      submenu: (
        <div className="VBsubmenu" id="more-submenu">
          <div className="submenu-column">
            <p><a href="/collections/best-sellers">Popular</a> Categories</p>
            <ul>
              <li><a href="/collections/ultra-supplements">Single Nutrients</a></li>
              <li><a href="/collections/pregnancy">Pregnancy</a></li>
              <li><a href="/collections/vitamins-for-men">Men's Health & Vitality</a></li>
              <li><a href="/collections/vitamins-for-women">Women's Health & Vitality</a></li>
              <li><a href="/collections/energy-vitamins">Energy</a></li>
              <li><a href="/collections/kids-vitamins">Kids</a></li>
              <li><a href="/collections/cartilage-and-bones">Cartilage & Bones</a></li>
              <li><a href="/collections/vitamin-d-supplements-tablets">Vitamin D</a></li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'women',
      title: 'Women',
      link: '/collections/vitamins-for-women',
      submenu: (
        <div className="VBsubmenu" id="home-submenu">
          <div className="submenu-column">
            <p>Shop By Brand</p>
            <ul>
              <li><a href="/pages/womens-vitamins-wellwoman">Wellwoman</a></li>
              <li><a href="/products/wellwoman-50-tablets">Wellwoman 50+</a></li>
              <li><a href="/products/wellwoman-70-tablets">Wellwoman 70+</a></li>
              <li><a href="/pages/hair-skin-nails-vitamins-perfectil">Perfectil</a></li>
              <li><a href="/pages/pregnancy-vitamins-pregnacare">Pregnacare</a></li>
              <li><a href="/pages/immune-system-vitamins-immunace">Immunace </a></li>
              <li><a href="/pages/probiotis">Probiotis</a></li>
              <li><a href="/pages/iron-supplements-feroglobin">Feroglobin</a></li>
              <li><a href="/pages/calcium-supplements-osteocare">Osteocare</a></li>
              <li><a href="/pages/menopause-supplements-menopace">Menopace</a></li>
              <li><a href="/pages/cartilage-bone-health-supplements-jointace">Jointace</a></li>
              <li><a href="/pages/hair-health-supplements-hairfollic">Hairfollic</a></li>
              <li><a href="/pages/diabetone">Diabetone</a></li>
            </ul>
          </div>
          <div className="submenu-column">
            <p>Shop By Need</p>
            <ul>
              <li><a href="/collections/pregnancy">Pregnancy</a></li>
              <li><a href="/collections/hair-vitamins-supplements">Hair</a></li>
              <li><a href="/collections/hair-and-beauty-supplements">Beauty</a></li>
              <li><a href="/products/perfectil-biotherapy-body-oil">Skincare</a></li>
              <li><a href="/collections/multivitamins">Multivitamins</a></li>
              <li><a href="/collections/immune-system-supplements">Immune Support</a></li>
              <li><a href="/collections/energy-vitamins">Energy</a></li>
              <li><a href="/collections/cartilage-and-bones">Cartilage & Bones</a></li>
              <li><a href="/collections/vitamins-supplements-for-during-and-after-the-menopause">Menopause</a></li>
              <li><a href="/collections/brain">Brain</a></li>
              <li><a href="/collections/heart-supplements">Heart</a></li>
              <li><a href="/collections/eyes">Eyes</a></li>
              <li><a href="/collections/digestion-supplements">Digestion</a></li>
              <li><a href="/collections/liver-supplements">Liver Support</a></li>
              <li><a href="/collections/blood-sugar-supplements">Blood Sugar</a></li>
              <li><a href="/collections/sports-and-fitness-range">Sports Supplements</a></li>
              <li><a href="/collections/supplements-for-anxiety-sleep">Anxiety & Sleep</a></li>
            </ul>
          </div>
          <div className="submenu-column">
            <p>Shop By Nutrient</p>
            <div className="submenu-three-col">
              <ul>
                <li className="vb-submenu-category"><a href="/collections/vitamins">Vitamins</a></li>
                <li><a href="/collections/vitamin-a">Vitamin A</a></li>
                <li><a href="/collections/vitamin-b-tablets-supplements">Vitamin B</a></li>
                <li><a href="/collections/vitamin-c-tablets-supplements">Vitamin C</a></li>
                <li><a href="/collections/vitamin-d-supplements-tablets">Vitamin D</a></li>
                <li><a href="/collections/vitamin-e">Vitamin E</a></li>
                <li><a href="/collections/vitamin-k">Vitamin K</a></li>
                <li><a href="/collections/biotin-supplements">Biotin</a></li>
                <li><a href="/collections/folic-acid-supplements-tablets">Folic Acid</a></li>
                <li><a href="/collections/vitamin-b12">Vitamin B12</a></li>
              </ul>
              <ul>
                <li className="vb-submenu-category"><a href="/collections/minerals">Minerals</a></li>
                <li><a href="/collections/calcium-supplements-tablets">Calcium</a></li>
                <li><a href="/collections/copper-supplements-tablets">Copper</a></li>
                <li><a href="/collections/iodine-supplements">Iodine</a></li>
                <li><a href="/collections/iron-supplements-tablets">Iron</a></li>
                <li><a href="/collections/magnesium-supplements-tablets">Magnesium</a></li>
                <li><a href="/collections/selenium-supplements-tablets">Selenium</a></li>
                <li><a href="/collections/zinc-tablets-supplements">Zinc</a></li>
                <br />
                <li className="vb-submenu-category"><span className="non-linkable">Other </span></li>
                <li><a href="/collections/collagen-supplements-drinks">Collagen</a></li>
                <li><a href="/collections/coq10-supplements-tablets">CoQ10</a></li>
                <li><a href="/products/ultra-cod-liver-oil-plus-omega-3-capsules">Cod Liver Oil</a></li>
                <li><a href="/collections/glucosamine-chondroitin-tablets-supplements">Glucosamine</a></li>
                <li><a href="/products/ultra-red-krill-oil">Krill Oil</a></li>
                <li><a href="/collections/nac-n-acetyl-cysteine-supplements">N-Acetyl Cysteine</a></li>
                <li><a href="/collections/omega-3-fish-oil-supplements">Omega-3</a></li>
              </ul>
              <ul className="divided_column">
                <li className="vb-submenu-category">
                  <a href="/collections/herbal-botanical-supplements">Botanicals & Herbals</a>
                </li>
                <li><a href="/products/ultra-ashwagandha-tablets">Ashwagandha</a></li>
                <li><a href="/collections/beta-carotene-supplements">Beta Carotene</a></li>
                <li><a href="/products/ultra-bilberry-lutein-zeaxanthin-supplements">Bilberry </a></li>
                <li><a href="/products/cinafen-cinnamon-and-fenugreek-tablets">Cinnamon</a></li>
                <li><a href="/products/ultra-cranberry-extract-tablets">Cranberry</a></li>
                <li><a href="/products/herbal-devils-claw">Devil's Claw</a></li>
                <li><a href="/products/herbal-echinacea">Echinacea</a></li>
                <li><a href="/collections/evening-primrose-oil">Evening Primrose Oil</a></li>
                <li><a href="/products/cinafen-cinnamon-and-fenugreek-tablets">Fenugreek</a></li>
                <li><a href="/collections/garlic-supplements">Garlic</a></li>
                <li><a href="/products/ultra-ginkgo-biloba-siberian-ginseng-tablets">Ginkgo & Ginseng</a></li>
                <li><a href="/products/ultra-green-tea-extract-tablets">Green Tea</a></li>
                <li><a href="/products/ultra-lycopene-tablets">Lycopene</a></li>
                <li><a href="/collections/lutein-supplements">Lutein</a></li>
                <li><a href="/products/ultra-plant-sterols-500mg-tablets">Plant Sterols</a></li>
                <li><a href="/products/ultra-sage-tablets">Sage</a></li>
                <li><a href="/collections/soy-isoflavones-supplements">Soy Isoflavones</a></li>
                <li><a href="/pages/turmeric-supplements">Turmeric</a></li>
                <li><a href="/products/herbal-sleepnite">Valerian</a></li>
              </ul>
            </div>
          </div>
          <div className="submenu-column">
            <p>Shop By Diet</p>
            <ul>
              <li><a href="/collections/gluten-free-supplements">Gluten Free</a></li>
              <li><a href="/collections/vitamin-gummies">Gummies</a></li>
              <li><a href="/collections/halal">Halal</a></li>
              <li><a href="/collections/liquid-vitamins">Liquid</a></li>
              <li><a href="/collections/vegan-supplements">Vegan</a></li>
              <li><a href="/collections/vegetarian-supplements">Vegetarian</a></li>
            </ul>
          </div>
        </div>
      )
    },
    // Add other menu items similarly (Men, Kids, 50+, All Products, Best Sellers)
  ];

  return (
    <header className="header">
      <div className="header__fixed">
        <div className="header__content container">
          {/* Mobile Menu Toggle */}
          <div className="vb_mobile_top_header">
            <div 
              className={`burger-menu burgerMenu ${isMobileMenuOpen ? 'open' : ''}`} 
              id="burgerMenu"
              onClick={toggleMobileMenu}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          {/* Logo */}
          <div className="header__logo">
            <a href="/">
              <img 
                className="ls-is-cached lazyloaded" 
                data-src="//www.vitabiotics.com/cdn/shop/files/logo.png?v=1613689720" 
                alt="vitabiotics" 
                width="160" 
                height="59" 
                style={{width: '100%', height: '100%'}} 
                src="//www.vitabiotics.com/cdn/shop/files/logo.png?v=1613689720"
              />
            </a>
          </div>

          {/* Main Navigation */}
          <div className="header__menu">
            <nav className="menu">
              <div className="menu__content">
                <nav id="vb-top-nav">
                  <div className="vb-nav-wrapper">
                    <ul className="nav-menu">
                      {navItems.map((item) => (
                        <li 
                          key={item.id}
                          className={`has-submenu ${activeSubmenu === item.id ? 'active' : ''}`}
                          onMouseEnter={() => setActiveSubmenu(item.id)}
                          onMouseLeave={() => setActiveSubmenu(null)}
                        >
                          <a href={item.link}>{item.title}</a>
                          {item.submenu && (
                            <div className="submenu-wrapper">
                              {item.submenu}
                            </div>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                </nav>
              </div>
            </nav>
          </div>
  <div>
            <h4>Hello</h4>
        </div>
          {/* Right Side Controls */}
          <div className="header__menu">
            <div className="header__control">
              {/* Search */}
              <div className="header__button header__button-search">
                <a 
                  href="/pages/search-results-page" 
                  className="search-open" 
                  aria-label="search"
                  onClick={(e) => {
                    e.preventDefault();
                    toggleSearch();
                  }}
                >
                  <svg aria-hidden="true" focusable="false" role="presentation" className="icon icon-search" viewBox="0 0 17 18">
                    <path d="M17 16.77l-5.605-5.606a6.382 6.382 0 1 0-1.064 1.064l5.605 5.605L17 16.77zM1.429 7.197a4.967 4.967 0 1 1 9.934.043 4.967 4.967 0 0 1-9.934-.043z"></path>
                  </svg>
                </a>
                
                {isSearchOpen && (
                  <div className="search">
                    <div>
                      <div 
                        className="search__close" 
                        style={{float: 'right'}}
                        onClick={toggleSearch}
                      >
                        ×
                      </div>
                    </div>
                    <form className="search__form ng-pristine ng-valid" action="/pages/search-results-page" method="get" role="search">
                      <input 
                        className="search__input snize-input-style" 
                        name="q" 
                        autoComplete="off" 
                        type="search" 
                        placeholder="Search" 
                        aria-label="Search" 
                        role="combobox" 
                        aria-haspopup="listbox" 
                        aria-autocomplete="list" 
                        aria-expanded="false" 
                        autoCorrect="off" 
                        autoCapitalize="off"
                      />
                      <button href="#" className="search__submit" aria-label="Search" type="submit">
                        <svg aria-hidden="true" focusable="false" role="presentation" className="icon icon-search" viewBox="0 0 17 18">
                          <path d="M17 16.77l-5.605-5.606a6.382 6.382 0 1 0-1.064 1.064l5.605 5.605L17 16.77zM1.429 7.197a4.967 4.967 0 1 1 9.934.043 4.967 4.967 0 0 1-9.934-.043z"></path>
                        </svg>
                      </button>
                    </form>
                    <div className="search__results"></div>
                  </div>
                )}
              </div>
              
              {/* Account */}
              <a 
                href="/account/login" 
                className="header__button header__button-account" 
                aria-label="my account"
              >
                <svg aria-hidden="true" focusable="false" role="presentation" className="icon icon-account" viewBox="0 0 17 18">
                  <path fill="#646464" d="M14.51 11.906a8.467 8.467 0 0 0-3.23-2.026 4.912 4.912 0 0 0 2.134-4.05A4.92 4.92 0 0 0 8.5.918 4.92 4.92 0 0 0 3.586 5.83c0 1.678.846 3.162 2.134 4.05a8.467 8.467 0 0 0-3.23 2.025A8.444 8.444 0 0 0 0 17.916h1.328c0-3.954 3.217-7.171 7.172-7.171a7.18 7.18 0 0 1 7.172 7.172H17c0-2.27-.884-4.405-2.49-6.01zM8.5 9.416a3.59 3.59 0 0 1-3.586-3.585A3.59 3.59 0 0 1 8.5 2.245a3.59 3.59 0 0 1 3.586 3.586A3.59 3.59 0 0 1 8.5 9.417z"></path>
                </svg>
              </a>
              
              {/* Cart */}
              <a 
                href="#" 
                className="header__button header__button-cart open-mini-cart" 
                aria-label="cart"
              >
                <svg aria-hidden="true" focusable="false" role="presentation" className="icon icon-cart" viewBox="0 0 13.5 17">
                  <path fill="#646464" d="M12.771 5.236c-.044-.697-.54-1.236-1.135-1.234h-1.504C10.132 1.792 8.606 0 6.723 0 4.841 0 3.315 1.792 3.315 4.002H1.819C1.223 4 .729 4.539.684 5.236l-.68 10.333c-.024.37.085.735.3 1.007.216.271.518.425.834.424h11.18c.315.001.617-.153.833-.424a1.48 1.48 0 0 0 .3-1.007l-.68-10.333zM6.727 1.337c1.252.006 2.265 1.196 2.27 2.665H4.458c.005-1.47 1.018-2.66 2.27-2.665zm-5.59 14.33L1.82 5.335h1.504v.987h1.135v-.987h4.539v.987h1.135v-.987h1.504l.681 10.334H1.137z"></path>
                </svg>
                <span className={`cart-qty ${cartQuantity > 0 ? '' : 'hide'}`}>
                  {cartQuantity}
                </span>
              </a>
            </div>
            <div className="language-switcher hide-medium-down">
              <div className="weglot_here"></div>
            </div>
          </div>
        </div>

        
      
        {/* Tooltip Box */}
        <div className="vb_tooltip_box" style={{background:"#000"}}>
          <div className="tooltip-banner-outer">
            <div className="tooltip-banner-inner">
              <img 
                className="tag" 
                loading="lazy" 
                width="22" 
                height="22" 
                src="https://cdn.shopify.com/s/files/1/0027/7263/1621/files/double_price_tag.webp?v=1689861190" 
                alt="3for2 tag" 
              />
              {/* Message */}
              <div className="tooltip-button popup" id="top-main-offer">3 for 2 all products</div>
           
              <div className="arrow__down">
                <div className="arrow-inner"></div>
              </div>
            </div>
          </div>
          {/* Cta buttons */}
          <div id="conversion-ctas" className="hide__conversion_ctas">
            <div className="ctas">
              <a href="/collections/best-sellers">Shop best sellers</a>
              <a href="/collections/all-vitabiotics-products">Shop All products</a>
            </div>
          </div>
        </div>
      
        
        {/* Submenu will appear here */}
        {activeSubmenu && (
          <div className="fixed-submenu-wrapper" style={{ maxHeight: '187px' }}>
            {navItems.find(item => item.id === activeSubmenu)?.submenu}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;