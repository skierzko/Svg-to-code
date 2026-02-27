# SVG to HTML Converter

A web application built with Next.js that allows you to convert SVG files into clean, ready-to-use HTML code.  
The project is designed for frontend developers, designers, and anyone who wants to quickly transform vector graphics into production-friendly markup.

## 🌐 Portfolio

[![Portfolio](https://img.shields.io/badge/Visit-My_Portfolio-111?style=for-the-badge&logo=github&logoColor=white)](https://kierzkowski.net)

## 🚀 Features

- 📂 Upload `.svg` files
- 🔄 Automatic conversion to structured HTML
- 🧹 Code cleanup and basic optimization
- 📋 One-click copy to clipboard
- 💾 Optional HTML file download
- 👀 Live preview (optional / planned)

## 🛠 Tech Stack

- Next.js  
- React  
- TypeScript (if applicable)  
- CSS / Tailwind CSS / other styling solution  

## 🎯 Project Goal

The goal of this application is to simplify working with SVG assets and speed up the process of implementing vector graphics in web projects.

Instead of manually cleaning or restructuring SVG markup, users can instantly generate clean HTML output ready for integration.

# 📦 Installation

To launch the application, you must complete the following steps.

To start the production version, replace **compose.dev.yaml** with **compose.prod.yaml**


1. Create a network
    ```
    docker network create svg_network
    ```

2. Build dev
    ```
    docker compose -f compose.dev.yaml build
    ```

3. Up dev
    ```
    docker compose -f compose.dev.yaml up
    ```

4. Go to app catalog
    ```
    cd app
    ```

5. Run npm install
    ```
    npm install
    ```

# 📄 License


If you want, I can also prepare a more “open-source polished” version with badges (build status, license, version, etc.).