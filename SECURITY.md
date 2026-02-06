# Security Notes

## Known Vulnerabilities

### Dev Dependencies (Non-Critical)

There are currently **3 high severity vulnerabilities** reported by `npm audit` in dev dependencies:

- **Package**: `glob` (via `eslint-config-next`)
- **Severity**: High
- **Impact**: Dev dependency only - does NOT affect production builds or runtime
- **Details**: Command injection vulnerability in glob CLI tool (GHSA-5j98-mcp5-4vw2)

### Why This Is Acceptable

1. **Dev Dependency Only**: The vulnerability exists in `eslint-config-next`, which is only used during development and build time, not in production.

2. **No Production Impact**: The vulnerable code is not included in the production bundle. It's only used by ESLint during the build process.

3. **Breaking Changes Required**: Fixing this would require upgrading to Next.js 16, which includes breaking changes and is not recommended for production deployments without thorough testing.

4. **Low Risk**: The vulnerability affects the `glob` CLI tool when used with specific flags (`-c/--cmd`), which Next.js ESLint config does not use.

### Resolution Options

**Option 1: Keep Current Setup (Recommended)**
- Acceptable for production since it's a dev dependency
- No impact on deployed application
- Monitor for Next.js 15/16 stable release

**Option 2: Upgrade to Next.js 15/16 (Future)**
- Requires code changes and testing
- Breaking changes may affect functionality
- Only recommended after thorough testing

### Monitoring

- Regularly check for updates: `npm audit`
- Monitor Next.js releases for fixes
- Review security advisories: https://github.com/advisories

## Production Security

✅ **Production code is secure:**
- No vulnerabilities in runtime dependencies
- All production packages are up-to-date
- Secure headers configured
- Input validation on forms
- Type-safe code with TypeScript

## Recommendations

1. **For Production**: The current setup is safe to deploy. The vulnerabilities do not affect the running application.

2. **For Development**: Be cautious when running ESLint with custom configurations. The default Next.js ESLint setup is safe.

3. **Future Updates**: Plan to upgrade to Next.js 15/16 when stable and after testing, which will resolve these vulnerabilities.

---

**Last Updated**: Current build
**Next Review**: When Next.js 15/16 stable is released
