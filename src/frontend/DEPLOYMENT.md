# Deployment Guide

This document describes how to deploy the Chocolate Day application to production.

## Prerequisites

- Ensure all code changes are committed to your repository
- The project uses the Internet Computer Platform (ICP) for hosting
- Deployment is handled via the caffeine.ai platform's built-in deployment tools

## Deployment Process

### Automatic Deployment via Caffeine.ai

The Chocolate Day application is automatically deployed when you request a build through the caffeine.ai interface:

1. **Request Deployment**: Use the chat interface to request deployment (e.g., "deploy this" or "publish to production")
2. **Build Process**: The platform will:
   - Build the frontend React application
   - Deploy the backend canister to the Internet Computer
   - Generate a public production URL
3. **URL Generation**: After successful deployment, a public URL will be provided that can be accessed by anyone without authentication

### Retrying a Failed Deployment

If a deployment fails, you can retry it:

1. **Request Retry**: Simply ask in the chat interface: "deploy again" or "retry deployment"
2. **Platform Retry**: The caffeine.ai platform will:
   - Re-attempt the build process with the current code
   - Re-deploy the backend canister
   - Generate or update the production URL
3. **No Code Changes Needed**: Retrying a deployment does not require any code modifications

### Finding Your Production URL

After a successful deployment:
1. The production URL will be displayed in the chat interface
2. The URL will also be recorded in `frontend/PRODUCTION_URL.txt`
3. You can copy the URL from either location to share with others

### Handling Deployment Errors

If deployment fails repeatedly:

**Common Error Types:**
- **Build Errors**: Check the build output for TypeScript or compilation errors
- **Canister Deployment Errors**: Verify backend code compiles correctly
- **Network Errors**: Temporary ICP network issues; retry after a few minutes
- **Resource Errors**: Canister may need more cycles or memory

**Actionable Steps:**
1. Review the error message provided in the chat interface
2. If it's a code error, fix the issue and request a new build
3. If it's a network/infrastructure error, simply retry the deployment
4. If errors persist, share the specific error message for troubleshooting

**Error Information to Capture:**
- Exact error message text
- Timestamp of the failed deployment
- Which step failed (build, canister deployment, URL generation)
- Any error codes or stack traces provided

## Production URL

After deployment completes, the production URL will be recorded in `PRODUCTION_URL.txt` for easy reference and sharing.

## Accessing the Deployed Application

The deployed Chocolate Day experience:
- Requires no authentication to view
- Is publicly accessible via the production URL
- Displays all 6 steps of the romantic chocolate journey
- Works on both desktop and mobile devices
- Supports both light and dark themes

## Post-Deployment Verification

After deployment:
1. **Copy the URL**: Get the production URL from the chat or `PRODUCTION_URL.txt`
2. **Test in Fresh Browser**: Open the URL in incognito/private mode
3. **Verify All Steps**: Navigate through all 6 steps of the experience
4. **Check Navigation**: Test Back/Next buttons work correctly
5. **Verify Assets**: Ensure all images, chocolates, and stickers load
6. **Test Responsive Design**: View on both mobile and desktop
7. **Test Themes**: Switch between light and dark mode
8. **Share**: Send the URL to your intended recipient

## Technical Details

- **Platform**: Internet Computer (ICP)
- **Frontend**: React + TypeScript + Tailwind CSS
- **Backend**: Motoko canister (minimal, no state)
- **Hosting**: Decentralized via ICP network
- **Domain**: Provided by caffeine.ai deployment infrastructure

## Troubleshooting

### Deployment Won't Start
- Ensure you've requested deployment via the chat interface
- Check that the previous build completed (success or failure)

### Build Fails
- Review TypeScript errors in the build output
- Verify all imports and file paths are correct
- Check that all required dependencies are installed

### Canister Deployment Fails
- Verify backend/main.mo compiles without errors
- Check ICP network status
- Retry after a few minutes if it's a network issue

### URL Not Generated
- Ensure the deployment completed successfully
- Check that both frontend and backend deployed
- Request the URL again via chat if needed

### Application Not Loading
- Verify the URL is correct and complete
- Check browser console for errors
- Try a different browser or device
- Clear browser cache and retry

## Notes

- Each deployment creates a new version
- The production URL remains stable across deployments
- No manual configuration or deployment steps are required
- All deployment is handled automatically by the caffeine.ai platform
- Retrying a deployment is safe and won't affect previous successful deployments
