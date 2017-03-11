#include "h.hpp"
#include "../VNodeData/VNodeData.hpp"
#include "../VNode/VNode.hpp"
#include <emscripten/bind.h>
#include <string>

/*
void addNS(VNode vnode) {
	vnode.data.ns = "http://www.w3.org/2000/svg";
  if (vnode.sel.compare(std::string("foreignObject")) && !vnode.children.empty()) {
		for(auto const& value: vnode.children) {
			addNS(value);
		}
  }
}
*/

VNode h_s(std::string sel) {
	VNode vnode = VNode();
	vnode.sel = sel;
	/*
	if (
  	vnode.sel.length() >= 3 && vnode.sel[0] == 's' && vnode.sel[1] == 'v' && vnode.sel[2] == 'g' &&
    (vnode.sel.length() == 3 || vnode.sel[3] == '.' || vnode.sel[3] == '#')
  ) {
    addNS(vnode);
  }
	*/
	return vnode;
};

VNode h_ti(std::string text, bool isText) {
	VNode vnode = VNode();
	if (isText) {
		vnode.text = text;
	} else {
		vnode.sel = text;
	}
	return vnode;
};

VNode h_sn(std::string sel, VNode node) {
	VNode vnode = h_s(sel);
	vnode.children = std::vector<VNode> { node };
	return vnode;
};

VNode h_st(std::string sel, std::string text) {
	VNode vnode = h_s(sel);
	vnode.text = text;
	return vnode;
};

VNode h_sd(std::string sel, VNodeData data) {
	VNode vnode = h_s(sel);
	vnode.data = data;
	return vnode;
};

VNode h_sc(std::string sel, std::vector<VNode> children) {
	VNode vnode = h_s(sel);
	vnode.children = children;
	return vnode;
};

VNode h_sdn(std::string sel, VNodeData data, VNode node) {
	VNode vnode = h_sd(sel, data);
	vnode.children = std::vector<VNode> { node };
	return vnode;
};

VNode h_sdt(std::string sel, VNodeData data, std::string text) {
	VNode vnode = h_sd(sel, data);
	vnode.text = text;
	return vnode;
};

VNode h_sdc(std::string sel, VNodeData data, std::vector<VNode> children) {
	VNode vnode = h_sd(sel, data);
	vnode.children = children;
	return vnode;
};

VNode h_stdc(std::string sel, std::string text, VNodeData data, std::vector<VNode> children) {
	VNode vnode(sel, text, data, children);
	return vnode;
};

EMSCRIPTEN_BINDINGS(h_function) {
	emscripten::function("_h_s", &h_s);
	emscripten::function("_h_ti", &h_ti);
	emscripten::function("_h_sn", &h_sn);
	emscripten::function("_h_st", &h_st);
	emscripten::function("_h_sd", &h_sd);
	emscripten::function("_h_sc", &h_sc);
	emscripten::function("_h_sdn", &h_sdn);
	emscripten::function("_h_sdt", &h_sdt);
	emscripten::function("_h_sdc", &h_sdc);
	emscripten::function("_h_stdc", &h_stdc);
}