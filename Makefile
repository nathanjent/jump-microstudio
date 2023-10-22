TARGET := jump_archive.zip

default: clean all

$(TARGET):
	zip -r $(TARGET) *

.PHONY: all
all: $(TARGET)

.PHONY: clean
clean:
	rm $(TARGET)
