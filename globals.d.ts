// global.d.ts
declare module "*.css" {
  const content: { [className: string]: string };
  export default content;
}

// Optional: for CSS modules too
declare module "*.module.css" {
  const classes: { readonly [key: string]: string };
  export default classes;
}