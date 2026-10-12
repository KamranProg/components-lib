# ComponentsLib

A production-ready Angular 20 component library featuring reusable UI components styled with Tailwind CSS. Built with modern standalone components and interactive demos.

## 🎯 Overview

ComponentsLib provides a curated set of accessible, customizable UI components for rapid application development. Each component is self-contained, fully typed, and demonstrated through interactive examples.

### Included Components

- **UiIconButton** - Flexible icon button with multiple variants (default, filled, ghost)
- **UiCard** - Versatile card container for content grouping
- **UiAccordion** - Expandable accordion sections with group management
- **UiFaqList** - FAQ component with integrated accordion behavior

## 🏗️ Architecture

```
src/app/
├── shared/                    # Reusable component library
│   ├── ui-icon-button/       # Icon button component
│   ├── ui-card/              # Card component
│   ├── ui-accordion-group/   # Accordion container
│   ├── ui-accordion-item/    # Accordion item
│   └── ui-faq-list/          # FAQ list component
│
├── demos/                     # Interactive component showcases
│   ├── icon-button-demo/
│   ├── card-demo/
│   ├── accordion-demo/
│   └── faq-list-demo/
│
└── app.ts                     # Root application component
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ or later
- pnpm (recommended) or npm

### Installation

```bash
# Install dependencies
npm install
# or
pnpm install
```

### Running the Development Server

```bash
npm start
# or
pnpm start
```

The application will be available at `http://localhost:4200/`. The dev server automatically reloads when you modify source files.

### Building for Production

```bash
npm run build
# or
pnpm build
```

Build artifacts will be stored in the `dist/` directory, optimized for performance and size.

## 🧪 Testing

### Unit Tests

```bash
npm test
# or
pnpm test
```

Runs the test suite using Karma and Jasmine.

### Watch Mode Build

For development with automatic rebuilding:

```bash
npm run watch
# or
pnpm watch
```

## 📦 Component Usage

Each component is a standalone Angular component that can be imported and used independently:

```typescript
import { UiCardComponent } from '@shared/ui-card/ui-card';
import { UiIconButtonComponent } from '@shared/ui-icon-button/ui-icon-button';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [UiCardComponent, UiIconButtonComponent],
  template: `
    <ui-card>
      <ui-icon-button ariaLabel="Close" variant="filled"></ui-icon-button>
    </ui-card>
  `
})
export class ExampleComponent {}
```

## 🎨 Styling

This project uses:
- **Tailwind CSS v4** - Utility-first CSS framework
- **PostCSS** - CSS transformation with Tailwind plugins

Global styles are managed in `src/styles.css`, and component-specific styles in component `.css` files.

## 🔧 Technology Stack

- **Angular** 20.0.0 - Web application framework
- **TypeScript** 5.8 - Static typing for JavaScript
- **Tailwind CSS** 4.1.11 - Utility CSS framework
- **RxJS** 7.8 - Reactive programming library
- **Karma & Jasmine** - Testing frameworks

## 📚 Resources

- [Angular Documentation](https://angular.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [Angular CLI Command Reference](https://angular.dev/tools/cli)

## 📝 License

This project is private and not currently licensed for external distribution.
