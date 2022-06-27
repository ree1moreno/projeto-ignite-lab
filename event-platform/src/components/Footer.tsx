import { Icon } from "./Icon";

export function Footer() {
  return (
    <footer className="sticky top-[100vh] bg-gray-900 p-6 flex justify-between items-center border-t border-gray-300 w-full max-w-[1100px] mx-auto">
      <div className="flex items-center gap-6">
        <Icon />
        <span className="text-gray-300 text-sm">
          Rocketseat - Todos os direitos reservados
        </span>
      </div>
      <p className="text-gray-300 text-sm">Políticas de privacidade</p>
    </footer>
  );
}
