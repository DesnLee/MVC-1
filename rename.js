function rename(node) {
	return node.Remark.replace(/ (.*)Japan(.*)/, '$1 JP $2');
}
