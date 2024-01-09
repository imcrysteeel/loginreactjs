import { create } from "zustand"

const useModalStore = create((set) => ({
    modalState: false,
    modalKey : "",
    onOpen: (modalKey) => set((state) => ({ modalState: true, modalKey })),
    onClose: () => set((state) => ({ modalState: false })),
}));

export default useModalStore