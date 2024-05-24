# QR Code Generator PWA

This is a Progressive Web App (PWA) that generates QR codes from user-provided URLs. It is built using React and Vite, and it leverages the power of service workers to provide offline functionality and a native app-like experience.

## Features

- Generate QR codes from URLs
- Responsive design for seamless usage across devices
- Offline functionality thanks to service workers
- Installable as a standalone app on supported devices

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm (version 6 or higher)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/QR_Code_Generator.git
```

2. Navigate to the project directory:

```bash
cd QRgenerator
```

3. Install the dependencies:

```bash
npm install
```

### Development

To start the development server with hot module replacement (HMR), run:

```bash
npm run dev
```

Open your browser and visit `http://localhost:5173` to see the app in action.

### Building for Production

To build the app for production, run:

```bash
npm run build
```

The optimized and minified files will be generated in the `dist` directory.

### Deployment

You can deploy the generated `dist` directory to any static hosting service or web server of your choice.

## Usage

1. Enter a valid URL in the input field.
2. Click the "Generate QR Code" button.
3. The app will generate and display the corresponding QR code.
4. You can scan the QR code using a QR code scanner app on your mobile device to navigate to the provided URL.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgements

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [QR Code Library](https://www.npmjs.com/package/qrcode)