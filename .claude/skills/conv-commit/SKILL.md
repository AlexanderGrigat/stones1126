---
name: conv-commit
description: Generate a conventional commit message for an Angular project based on current changes
---
​
# Conventional Commit Message Generator (Angular)
​
Analyze the current git changes and suggest a conventional commit message with optional ticket ID reference.
​
## Instructions
​
1. Run `git status` and `git diff --staged` (or `git diff` if nothing is staged) to see the changes
2. Check the current branch name with `git branch --show-current` to extract a ticket ID if present
3. Analyze the changes and determine:
   - **Type**: feat, fix, docs, style, refactor, perf, test, build, ci, chore
   - **Scope** (optional): The feature module, component, service or area affected (e.g., product, product-list, product-data, routing)
   - **Description**: Clear, concise summary in imperative mood
   - **Ticket ID**: Extract from branch name or ask the user if not found
   - **Body** (if needed): Additional context for complex changes
   - **Breaking changes** (if applicable): Note with a `BREAKING CHANGE:` footer
4. Generate the commit message in this format:
​
```
<type>(<scope>): <description> [TICKET-ID]
​
[optional body]
​
[optional footer(s)]
```
​
## Ticket ID Detection
​
1. **From the branch name**, look for patterns like:
   - `feature/STN-123-product-list` → `[STN-123]`
   - `bugfix/STN-456-fix-form-validation` → `[STN-456]`
   - `STN-789-refactor-product-service` → `[STN-789]`
2. If no ticket ID is found, ask the user: "I couldn't find a ticket ID in the branch name. Please provide the ticket ID or type 'none' to skip."
​
## Conventional Commit Types
​
- **feat**: New feature for the user
- **fix**: Bug fix for the user
- **docs**: Documentation only changes
- **style**: Code style changes (formatting, missing semicolons, etc.)
- **refactor**: Code change that neither fixes a bug nor adds a feature
- **perf**: Performance improvements
- **test**: Adding or correcting tests
- **build**: Changes to the build system or dependencies (Angular CLI, npm)
- **ci**: Changes to CI/CD configuration
- **chore**: Other changes that don't modify src or test files
​
## Guidelines
​
- Keep the description under 72 characters (excluding ticket ID)
- Use imperative mood: "add" not "added" or "adds"
- Don't capitalize the first letter of the description
- No period at the end of the description
- Ticket ID always in square brackets at the end: `[STN-123]`
​
## Angular Project Guidelines
​
- **feat**: New components, directives, pipes, services, routes, forms
- **fix**: Bug fixes in templates, bindings, validation, routing, HTTP handling
- **refactor**: Restructuring such as migrating to standalone components, signals or the new control flow (`@if`, `@for`)
- **test**: Unit tests for components and services
- **style**: Component styles and formatting
- **build**: `package.json` changes, `ng update`, Angular CLI configuration
- **perf**: Change detection (e.g. OnPush), lazy loading, bundle size
- **docs**: README, CLAUDE.md and other documentation
​
## Output Format
​
Provide the commit message in a code block, ready to copy.
​
**Single-line commit:**
​
```bash
git commit -m "type(scope): description [TICKET-ID]"
```
​
**Multi-line commit:**
​
```bash
git commit -m "type(scope): description [TICKET-ID]" -m "Body explaining the changes in more detail.
​
- Additional detail point 1
- Additional detail point 2
​
BREAKING CHANGE: description of breaking change if applicable"
```
​
## Examples
​
```
feat(product): add product list component [STN-123]
```
​
```
fix(product-form): validate price as positive number [STN-456]
```
​
```
refactor(product-data): replace BehaviorSubject with signals [STN-789]
```
​
```
test(product-data): mock HTTP calls with HttpTestingController [STN-234]
```
​
```
build(deps): upgrade Angular from 20 to 21 [STN-890]
​
Run ng update for @angular/core and @angular/cli.
​
- Updated all @angular/* packages
- Migrated deprecated APIs
- Fixed failing unit tests
​
BREAKING CHANGE: Minimum Node.js version is now 20.19.0
```
​
## Process
​
1. First, show the detected branch name and the extracted ticket ID (if found)
2. Display a summary of the changes
3. Propose the commit message with reasoning
4. Ask whether the user wants to modify scope, type or description
5. Provide the final, ready-to-use git commit command
​
After the commit message, briefly explain:
​
- Why you chose this type
- Why you chose this scope (or why no scope)
- How you determined the ticket ID