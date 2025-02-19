import { create } from 'zustand';

const useMemberStore = create((set) => ({
  members: [],
  showMembers: false,
  memberRoles: {},
  admins: [],
  setMemberRoles: (memberRoles) => set((state) => ({ ...state, memberRoles })),
  setAdmins: (admins) => set(() => ({ admins })),
  toggleShowMembers: () =>
    set((state) => ({ showMembers: !state.showMembers })),
  setMembersHandler: (memberList) => set(() => ({ members: memberList })),
}));

export default useMemberStore;
