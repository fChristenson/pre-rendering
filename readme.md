# Pre-rendering

## What we will cover

- What is pre-rendering?
- How does it work?
- When do we want to do it?

## Notes

Pre-rendering is when you construct a website from dynamic information before runtime.
After the pre-rendering is done you serve the generated files as a static website.

In traditional html templating you perform the same process but on every request.
This is useful if you have dynamic content with the same template and too many pages to pre-render them all.
