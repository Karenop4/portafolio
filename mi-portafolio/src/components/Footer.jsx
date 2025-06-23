export function Footer() {
  return (
    <footer className="bg-card text-muted-foreground border-t border-border py-6 text-center text-sm">
      <p>
        &copy; {new Date().getFullYear()} <span className="text-primary font-medium">Karen Ortiz</span>. Todos los derechos reservados.
      </p>
    </footer>
  );
}
