import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import Login from "./Login";
import { BrowserRouter as Router } from "react-router-dom";
import { signInWithPopup } from "firebase/auth";
import Modal from "./Modal";

jest.mock("firebase/auth", () => ({
  getAuth: jest.fn().mockReturnValue({}),
  signInWithEmailAndPassword: jest.fn(),
  createUserWithEmailAndPassword: jest.fn(),
  signInWithPopup: jest.fn(),
  GoogleAuthProvider: jest.fn().mockImplementation(() => ({})),
  FacebookAuthProvider: jest.fn().mockImplementation(() => ({})),
}));

describe("Login Component", () => {
  it('should open modal when "Login" button is clicked', () => {
    render(
      <Router>
        <Login />
      </Router>
    );

    fireEvent.click(screen.getByText("Login"));
    expect(screen.getByRole("dialog")).toBeInTheDocument();
  });

  it('should close modal when "X" button is clicked', () => {
    const onCloseMock = jest.fn();
    render(
      <Router>
        <Modal onClose={onCloseMock} />
      </Router>
    );

    fireEvent.click(screen.getByText("X"));

    expect(onCloseMock).toHaveBeenCalled();
  });

  it('should email login form appears when clicking "Acessar com Email"', () => {
    render(
      <Router>
        <Login />
      </Router>
    );

    fireEvent.click(screen.getByText("Login"));
    const emailLoginButton = screen.getByText("Acessar com Email");
    expect(emailLoginButton).toBeInTheDocument();

    fireEvent.click(emailLoginButton);

    expect(screen.getByLabelText("Email:")).toBeInTheDocument();
    expect(screen.getByLabelText("Password:")).toBeInTheDocument();
    const loginButtonInForm = screen.queryAllByText("Login")[1];
    expect(loginButtonInForm).toBeInTheDocument();
  });

  it("should handles Google login correctly", async () => {
    const mockGoogleLogin = jest.fn().mockResolvedValue({
      user: { email: "testuser@gmail.com" },
    });

    (signInWithPopup as jest.Mock).mockImplementation(mockGoogleLogin);

    render(
      <Router>
        <Login />
      </Router>
    );

    fireEvent.click(screen.getByText("Login"));
    fireEvent.click(screen.getByText("Acessar com Google"));

    await waitFor(() => {
      expect(mockGoogleLogin).toHaveBeenCalled();
    });
  });

  it("should handles Facebook login correctly", async () => {
    const mockFacebookLogin = jest.fn().mockResolvedValue({
      user: { email: "testuser@facebook.com" },
    });

    (signInWithPopup as jest.Mock).mockImplementation(mockFacebookLogin);

    render(
      <Router>
        <Login />
      </Router>
    );

    fireEvent.click(screen.getByText("Login"));
    fireEvent.click(screen.getByText("Acessar com Facebook"));

    await waitFor(() => {
      expect(mockFacebookLogin).toHaveBeenCalled();
    });
  });
});
