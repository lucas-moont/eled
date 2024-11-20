/*
<header role="banner" class="nav-default-header" itemtype="http://schema.org/Store" itemid="#this" itemscope="">

    <div class="nav-default-header__bounds" id="nav-header-container">
      <!-- Categories -->
      <ul itemscope itemtype="http://schema.org/SiteNavigationElement" class="nav-default-list" id="nav-list">
        <li class="nav-default-list__item nav-default__hamburger-button" id="nav-default__hamburger-button">
          <input type="checkbox" id="mobile-categories-menu-switch" name="nav-tools-header__menu-switch">
          <label for="mobile-categories-menu-switch" id="hamburguer-menu">
            <span class="nav-header__hamburger"></span>
            <span class="nav-header__hamburger"></span>
            <span class="nav-header__hamburger"></span>
          </label>
        </li>

        {{#each menu}}
          <li class="nav-default-list__item {{#if this.featured}}nav-default__sale-link{{/if}}" data-js="{{this.name}}-{{@index}}" has-childs={{#if this.nodes}}"true"{{else}}"false"{{/if}}>
            {{#if this.url}}
            <a href="{{this.url}}" {{#if this.openNewTab}}target="_blank" rel="noopener noreferrer"{{/if}}>
              <span class="font-secondary-text">{{this.name}}</span>
            </a>
            {{else}}
            <span class="font-secondary-text header--link-disabled">{{this.name}}</span>
            {{/if}}
          </li>
        {{/each}}

        {{#if sale.text}}
          <li class="nav-default-list__item nav-default__sale-link" id="nav-default__sale-link">
            <a href="{{sale.url}}" class="font-secondary-text">{{sale.text}}</a>
          </li>
        {{/if}}

        <li class="nav-default-list__item nav-default__see-more" id="nav-default__see-more" has-childs="true">
          <a class="font-secondary-text">
            <span>{{i18n.moreCategories}}</span>
          </a>
        </li>
      </ul>

      <!-- Mobile responsive menu -->
      <div itemscope itemtype="http://schema.org/SiteNavigationElement" class="nav-default-sidebar-menu nav-default-responsive-menu header--custom-background" id="responsive-menu">
        <form class="nav-default-search-form header--custom-border" id="search-form-responsive" novalidate="">
          <button type="submit" class="search-button">
            {{> explorer/views/partials/search}}
          </button>
          <input type="text" placeholder="{{i18n.smallPlaceholder}}" class="header--custom-text" id="search-input-responsive" required="" autocomplete="off">
        </form>

        <ul class="responsive-menu-list {{#if flash.enabled}}responsive-menu-list--with-flash{{/if}}">
          {{#if sale.text}}
            <li class="nav-default-list--vertical__item nav-default__sale-link header--custom-border">
              <a href="{{sale.url}}" class="header--custom-text">{{sale.text}}</a>
            </li>
            <li class="nav-default-list__item nav-default__hamburger-button" id="nav-default__hamburger-button"></li>
          {{/if}}

          {{#each menu}}
            <li class="nav-default-list--vertical__item {{#if this.featured}}nav-default__sale-link{{/if}}">
              {{#if this.url}}
              <a href="{{this.url}}" class="header--custom-text"{{#if this.openNewTab}} target="_blank" rel="noopener noreferrer"{{/if}}>{{this.name}}</a>
              {{else}}
              <span class="header--custom-text header--link-disabled">{{this.name}}</span>
              {{/if}}
              {{#if this.nodes}}
                <div>
                  <input type="checkbox" data-js="categories-toggle" id="mobile-{{@index}}" name="nav-tools-header__menu-switch">
                  <label for="mobile-{{@index}}" class="toggle-menu">
                    <span class="nav-header__toggle nav-header__hamburger"></span>
                    <span class="nav-header__toggle nav-header__hamburger"></span>
                  </label>
                </div>
              {{/if}}
            </li>
            <div class="nav-default-list--vertical__subitem-container" data-toggle="mobile-{{@index}}" >
              {{#each this.nodes}}
                <li class="nav-default-list--vertical__subitem">
                  <a href="{{this.url}}" {{#if this.openNewTab}}target="_blank" rel="noopener noreferrer"{{/if}} class="header--custom-text">{{this.name}}</a>
                  {{#if this.nodes}}
                    <div>
                      <input type="checkbox" data-js="categories-toggle" id="mobile-attr-{{@../index}}-{{@index}}" name="nav-tools-header__menu-switch">
                      <label for="mobile-attr-{{@../index}}-{{@index}}" class="toggle-menu">
                        <span class="nav-header__toggle nav-header__hamburger"></span>
                        <span class="nav-header__toggle nav-header__hamburger"></span>
                      </label>
                    </div>
                  {{/if}}
                </li>
                <div class="nav-default-list--vertical__attr-container" data-toggle="mobile-attr-{{@../index}}-{{@index}}">
                  {{#each this.nodes}}
                    <li class="nav-default-list--vertical__attribute">
                      <a href="{{this.url}}" {{#if this.openNewTab}}target="_blank" rel="noopener noreferrer"{{/if}} class="header--custom-text">{{this.name}}</a>
                    </li>
                  {{/each}}
                </div>
              {{/each}}
            </div>
            <hr class="nav-default-list--vertical__hr header--custom-border" />
          {{/each}}
        </ul>
      </div>

      <!-- Logo -->
      <div class="nav-default-header__title" id="nav-default-header__nav-logo">
        {{#if logo}}
          <a class="nav-default-header__logo" href="/" id="logo-wrapper">
            <span class="nav-header__title-hidden title">{{shop.name}}</span>
            <img class="nav-header__image" src="{{logo}}" alt="{{shop.name}}" itemprop="logo" />
          </a>
        {{else}}
          <a class="nav-default-header__logo title" href="/" id="logo-wrapper">{{name}}</a>
        {{/if}}
      </div>

      <!-- Icons -->
      <nav class="nav-default-header__nav-icons" id="nav-default-header__nav-icons">
        <div class="nav-icons-group">
          <form class="nav-search-form" id="search-form" novalidate="">
            <input type="text" class="nav-search-input header--custom-border header--custom-text" placeholder="{{i18n.smallPlaceholder}}" id="search-input" required="" autocomplete="off">
            <button type="submit" class="search-button" id="nav-search-button">
              {{> explorer/views/partials/search}}
            </button>
          </form>
          {{#if cart}}
            <a href="{{cart.href}}" title="Carrito" class="cart-button" id="nav-cart">
              {{> explorer/views/partials/cart}}
              {{> explorer/views/partials/cart-badge}}
            </a>
          {{/if}}
        </div>
      </nav>
    </div>

    <!-- Popover -->
    <div itemscope itemtype="http://schema.org/SiteNavigationElement" id="popover-menu" class="header--custom-background">
      <!-- Categories -->
      <div class="nav-bounds nav-default-desktop-categories-popover">
        {{#each menu}}
          <div class="nav-default-list--horizontal__item" data-toggle="{{this.name}}-{{@index}}">
            <li class="nav-default-list--horizontal__category header--custom-text {{#if this.featured}}nav-default__sale-link{{/if}}">
              {{#if this.url}}
              <a href="{{this.url}}" {{#if this.openNewTab}}target="_blank" rel="noopener noreferrer"{{/if}}>{{this.name}}</a>
              {{else}}
              <span class="header--link-disabled">{{this.name}}</span>
              {{/if}}
              <a href="{{this.url}}" {{#if this.openNewTab}}target="_blank" rel="noopener noreferrer"{{/if}}>{{this.name}}</a>
              <hr class="nav-default-list--vertical__hr header--custom-border" />
            </li>
            {{#each this.nodes}}
            <div class="nav-default-list--horizontal__subitem">
              <li class="header--custom-text">
                <a href="{{this.url}}" {{#if this.openNewTab}}target="_blank" rel="noopener noreferrer"{{/if}}>{{this.name}}</a>
              </li>
              <div class="nav-default-list--horizontal__attr-container">
                {{#each this.nodes}}
                <li class="nav-default-list--horizontal__attribute header--custom-text">
                  <a href="{{this.url}}" {{#if this.openNewTab}}target="_blank" rel="noopener noreferrer"{{/if}}>{{this.name}}</a>
                </li>
                {{/each}}
              </div>
            </div>
            {{/each}}
          </div>
        {{/each}}
      </div>
      <!-- See more -->
      <div class="nav-bounds nav-default-desktop-see-more-popover" id="nav-popover-list">
        {{#each menu}}
        <div class="nav-default-list--horizontal__item" data-toggle="see-more">
          <li class="nav-default-list--horizontal__category header--custom-text {{#if this.featured}}nav-default__sale-link{{/if}}">
            {{#if this.url}}
            <a href="{{this.url}}" {{#if this.openNewTab}}target="_blank" rel="noopener noreferrer"{{/if}}>{{this.name}}</a>
            {{else}}
            <span class="header--link-disabled">{{this.name}}</span>
            {{/if}}
            <hr class="nav-default-list--vertical__hr header--custom-border" />
          </li>
          <div>
            {{#each this.nodes}}
            <li class="nav-default-list--horizontal__subitem header--custom-text">
              <a href="{{this.url}}" {{#if this.openNewTab}}target="_blank" rel="noopener noreferrer"{{/if}}>{{this.name}}</a>
            </li>
            <div class="nav-default-list--horizontal__attr-container">
              {{#each this.nodes}}
              <li class="nav-default-list--horizontal__attribute header--custom-text">
                <a href="{{this.url}}" {{#if this.openNewTab}}target="_blank" rel="noopener noreferrer"{{/if}}>{{this.name}}</a>
              </li>
              {{/each}}
            </div>
            {{/each}}
          </div>
        </div>
        {{/each}}
      </div>
    </div>
  </header>
*/
