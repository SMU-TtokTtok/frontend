export const getRoleDisplayName = (role: string): string => {
  switch (role) {
    case 'PRESIDENT':
      return '회장';
    case 'VICE_PRESIDENT':
      return '부회장';
    case 'EXECUTIVE':
      return '임원진';
    case 'MEMBER':
      return '부원';
    default:
      return role;
  }
};
