import { ClubItemInfo } from '../model/club';

export class TrieNode {
  children: Map<string, TrieNode> = new Map();
  clubs: ClubItemInfo[] = [];
}

class Trie {
  private root: TrieNode;

  constructor(data: ClubItemInfo[] = []) {
    this.root = new TrieNode();
    data.forEach((club) => this.add(club));
  }

  add(club: ClubItemInfo) {
    let node = this.root;
    for (const char of club.name.toLowerCase()) {
      if (!node.children.has(char)) {
        node.children.set(char, new TrieNode());
      }
      node = node.children.get(char)!;
    }
    node.clubs.push(club);
  }

  search(prefix: string): ClubItemInfo[] {
    let node = this.root;
    for (const char of prefix.toLowerCase()) {
      const next = node.children.get(char);
      if (!next) return [];
      node = next;
    }
    return this.collectAll(node);
  }

  private collectAll(node: TrieNode): ClubItemInfo[] {
    const results: ClubItemInfo[] = [...node.clubs];
    for (const child of node.children.values()) {
      results.push(...this.collectAll(child));
    }
    return results;
  }
}

export default Trie;
