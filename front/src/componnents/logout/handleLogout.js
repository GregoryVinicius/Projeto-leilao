export const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
}