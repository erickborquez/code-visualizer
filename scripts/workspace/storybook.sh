#!/usr/bin/env bash
echo "┏━━━ 📕 Starting Storybook (components) ━━━━━━━━━━━━━━━━━━━"
lerna run storybook --stream --scope @code-visualizer/components
