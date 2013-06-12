Atbash = function() {
  this.alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  this.key      = this.alphabet.slice(0).reverse();

  this.encode = function(plaintext) {
    var ciphertext = this.encipher(this.normalize(plaintext));
    return this.separate(ciphertext);
  }

  this.encipher = function(plaintext) {
    if (plaintext === "") {
      return "";
    }
    else {
      return this.translate(plaintext.substr(0,1)) + this.encipher(plaintext.substr(1));
    }
  }

  this.normalize = function(str) {
    return str.toLowerCase().replace(/[^a-z0-9]/g, "");
  }

  this.translate = function(char) {
    var idx = this.alphabet.indexOf(char.toLowerCase());

    if (idx > -1) {
      return this.key[idx];
    }
    else {
      return char;
    }
  }

  this.separate = function(str) {
    return str.match(/[a-z0-9]{5}|[\w\x]+/ig).join(" ")
  }

  return this;
}();
